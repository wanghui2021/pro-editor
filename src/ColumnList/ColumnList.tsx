import {
  SortableList,
  SortableListProps,
  SortableListRef,
  getPrefixCls,
} from '@ant-design/pro-editor';
import { FC, forwardRef, useCallback } from 'react';
import ColumnItem from './ColumnItem';
import { Header } from './Header';
import { useStyle } from './style';
import { ColumnItemList } from './types';

export interface ColumnListProps<T = any> extends SortableListProps<T> {
  columns: ColumnItemList<T>;
}

const ColumnList: <T>(props: ColumnListProps<T>) => ReturnType<FC> = forwardRef<
  SortableListRef,
  ColumnListProps
>(({ prefixCls: customPrefixCls, className, columns, actions, hideRemove, ...props }, ref) => {
  const prefixCls = getPrefixCls('column-list', customPrefixCls);
  const { cx } = useStyle(prefixCls);

  const renderItem = useCallback(
    (item, { index, listeners, dragging }) => (
      <ColumnItem
        columns={columns}
        item={item}
        dragging={dragging}
        listeners={listeners}
        index={index}
        prefixCls={prefixCls}
        actions={typeof actions === 'function' ? actions(item, index) : actions}
        hideRemove={hideRemove}
      />
    ),
    [prefixCls, columns],
  );

  return (
    <SortableList
      ref={ref}
      renderItem={renderItem}
      renderHeader={() => <Header prefixCls={prefixCls} columns={columns} />}
      className={cx(prefixCls, className)}
      {...props}
    />
  );
});

export default ColumnList;
