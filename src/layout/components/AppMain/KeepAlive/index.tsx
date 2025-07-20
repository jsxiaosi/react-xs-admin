import React, { memo, Suspense, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useOutlet, useParams } from 'react-router';
import type { ReactNode, RefObject } from 'react';
import LayoutSpin from '@/components/LayoutSpin';
import { useAppSelector } from '@/store/hooks';

export interface ComponentReactElement {
  children?: ReactNode | ReactNode[];
}

interface ComponentProps extends ComponentReactElement {
  active: boolean;
  name: string;
  renderDiv: RefObject<HTMLDivElement | null>;
}

export const Component: React.FC<ComponentProps> = ({ active, children, name, renderDiv }) => {
  const [targetElement] = useState(() => document.createElement('div'));
  const activatedRef = useRef(false);
  activatedRef.current = activatedRef.current || active;

  useEffect(() => {
    if (active) {
      renderDiv.current?.appendChild(targetElement);
    } else {
      try {
        renderDiv.current?.removeChild(targetElement);
      } catch (e) {
        console.error(e);
      }
    }
  }, [active, name, renderDiv, targetElement]);

  useEffect(() => {
    targetElement.setAttribute('id', name);
  }, [name, targetElement]);

  return <Suspense fallback={<LayoutSpin />}>{activatedRef.current && createPortal(children, targetElement)}</Suspense>;
};

interface Props extends ComponentReactElement {
  maxLen?: number;
}
export const KeepAlive = memo(({ maxLen = 10 }: Props) => {
  const ele = useOutlet();
  const location = useLocation();
  const params = useParams();
  const activeName = location.pathname + location.search;
  const multiTabs = useAppSelector(state => state.route.multiTabs);

  const containerRef = useRef<HTMLDivElement>(null);
  const [cacheReactNodes, setCacheReactNodes] = useState<Array<{ name: string; ele?: ReactNode }>>([]);

  useEffect(() => {
    if (!activeName) {
      return;
    }
    const include = multiTabs.map(i => i.key);
    setCacheReactNodes(reactNodes => {
      reactNodes = reactNodes.filter(i => !i.name.startsWith('/refresh'));

      if (location.pathname.startsWith('/refresh')) {
        const reactIndex = reactNodes.findIndex(res => res.name === `/${params['*']}${location.search}`);
        if (reactIndex !== -1) reactNodes.splice(reactIndex, 1);
        reactNodes.push({
          name: activeName,
          ele,
        });
        return reactNodes;
      }

      // 缓存超过上限的
      if (reactNodes.length >= maxLen) {
        reactNodes.splice(0, 1);
      }
      // 添加
      const reactNode = reactNodes.find(res => res.name === activeName);
      if (!reactNode) {
        reactNodes.push({
          name: activeName,
          ele,
        });
      }

      // 缓存路由列表和标签页列表同步
      if (include) {
        return reactNodes.filter(i => include.includes(i.name));
      }
      return reactNodes;
    });
  }, [activeName, maxLen, multiTabs]);

  return (
    <>
      <div ref={containerRef} className="keep-alive" />
      {cacheReactNodes.map(i => {
        return (
          <Component active={i.name === activeName} renderDiv={containerRef} name={i.name} key={i.name}>
            {i.ele}
          </Component>
        );
      })}
    </>
  );
});
