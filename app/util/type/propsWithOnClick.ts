export type propsWithOnClick<T, K = Element> = T & {
  onClick?: React.MouseEventHandler<K> | undefined;
};
