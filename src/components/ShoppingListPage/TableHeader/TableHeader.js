import {
  Tableheader,
  Wrapper,
  Interlayer,
  TableTitle,
} from './TableHeader.styled';

export default function TableHeader() {
  return (
    <Tableheader>
      <TableTitle>Product</TableTitle>
      <Wrapper>
        <TableTitle>Number</TableTitle>
        <Interlayer></Interlayer>
        <TableTitle>Remove</TableTitle>
      </Wrapper>
    </Tableheader>
  );
}
