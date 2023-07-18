'use client';

import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import {
  AddToCartButton,
  BackButton,
  Container,
  ProductCategory,
  ProductContainer,
  ProductDescription,
  ProductDescriptionTitle,
  ProductDetails,
  ProductPrice,
  ProductShipping,
  ProductTitle,
} from './styles';
import backIcon from '@/assets/back.svg';
import { api } from '@/lib/api';
import { IProduct } from '@/types/product';
import { useQuery } from '@tanstack/react-query';
import { Category } from '@/types/category';
import { formatCentsToMoney } from '@/utils/formatCentsToMoney';
import cartIcon from '@/assets/shopping-bag-white.svg';
import { useCart } from '@/hooks/useCart';

const graphqlQuery = (id: string) => {
  return {
    query: `query {
            allProducts(filter: {id: "${id}"}) {
                id,
                name,
                image_url,
                price_in_cents,
                category,
                description
            }
        }`,
  };
};

async function getProduct(id: string) {
  const response = await api.post('', graphqlQuery(id));

  return response.data.data.allProducts[0] as IProduct;
}

export default function Product({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: product, isLoading } = useQuery({
    queryKey: [`product-${id}`, id],
    queryFn: () => getProduct(id),
    staleTime: 5000,
  });

  const getProductCategory = (category: Category): string => {
    if (category === 'mugs') return 'Caneca';
    if (category === 't-shirts') return 'Camiseta';
    return '';
  };

  const { addItem } = useCart();

  if (!product || isLoading) {
    return (
      <Container>
        <Skeleton width={70} height={24} />
        <ProductContainer>
          <Skeleton width={640} height={580} />
          <ProductDetails>
            <Skeleton width={80} height={24} style={{ marginBottom: 20 }} />
            <Skeleton width={448} height={48} />
            <Skeleton width={88} height={30} style={{ marginBottom: 24 }} />
            <Skeleton width={434} height={18} style={{ marginBottom: 58 }} />
            <Skeleton width={448} height={24} />
            <Skeleton width={448} height={64} style={{ marginBottom: 200 }} />
            <Skeleton width={448} height={44} />
          </ProductDetails>
        </ProductContainer>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton href="/">
        <Image src={backIcon} alt="ícone voltar" width={24} height={24} />
        Voltar
      </BackButton>
      <ProductContainer>
        <Image
          src={product.image_url}
          alt={`foto do produto ${product.name}`}
          fill
        />
        <ProductDetails>
          <ProductCategory>
            {getProductCategory(product.category)}
          </ProductCategory>

          <ProductTitle>{product.name}</ProductTitle>

          <ProductPrice>
            R$ {formatCentsToMoney(product.price_in_cents)}
          </ProductPrice>

          <ProductShipping>
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </ProductShipping>

          <ProductDescriptionTitle>descrição</ProductDescriptionTitle>

          <ProductDescription>{product.description}</ProductDescription>

          <AddToCartButton onClick={() => addItem(product.id)}>
            <Image src={cartIcon} alt="ícone carrinho" width={24} height={24} />
            Adicionar ao carrinho
          </AddToCartButton>
        </ProductDetails>
      </ProductContainer>
    </Container>
  );
}
