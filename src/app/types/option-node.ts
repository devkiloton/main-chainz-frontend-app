export type OptionNode = {
  name: string;
  isDisabled: boolean;
  children?: Array<OptionNode>;
  icon?: string;
  isSvg?: boolean;
  route?: string;
};
