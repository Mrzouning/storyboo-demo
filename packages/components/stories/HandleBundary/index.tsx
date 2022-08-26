import React, { ReactElement } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { LoadingComponent } from "../Loading";
export interface HandleBundaryProps<T, E> {
  /**
   * useQuery返回值
   */
  query: UseQueryResult<T, E>;
  /**
   * data为请求的相应结果
   */
  children: (data: T) => ReactElement;
  /**
   * loading组件
   */
  loadingComponent?: ReactElement;
}

export const HandleBundary = <T extends unknown, E = unknown>({
  query,
  children,
  loadingComponent = <LoadingComponent />,
}: HandleBundaryProps<T, E>) => {
  if (query.isLoading) return loadingComponent;
  if (query.isSuccess) return children(query.data);
  return (
    <div>
      <p className="my-4 text-purple-300">请求发生错误🥱，🎹🚗❌</p>
      <button onClick={() => query.refetch()}>点击重试</button>
    </div>
  );
};

export default HandleBundary;
