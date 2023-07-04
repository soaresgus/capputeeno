import { IProduct } from '@/types/product';
import { Container, Divider, Price, ProductDetails, Title } from './styles';

import Image from 'next/image';
import { formatCentsToMoney } from '@/utils/formatCentsToMoney';

interface IProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: IProductCardProps) {
  return (
    <Container href={`product/${product.id}`}>
      <Image
        src={product.image_url}
        width={256}
        height={300}
        alt={`Foto do produto ${product.name}`}
      />

      <ProductDetails>
        <Title>{product.name}</Title>
        <Divider />
        <Price>R$ {formatCentsToMoney(product.price_in_cents)}</Price>
      </ProductDetails>
    </Container>
  );
}
