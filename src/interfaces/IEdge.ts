interface INode {
  id: string;
  name: string;
  publicURL: string;
}

export interface IEdge {
  node: INode;
}
