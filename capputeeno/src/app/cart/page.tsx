"use client"

import { BackButton } from "@/components/backButton";
import { CartItem } from "@/components/cart/cartItem";
import { DefaultPageLayout } from "@/components/defaultPageLayout";
import { Divider } from "@/components/divider";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/products";
import { convertPrice } from "@/utils/formatPrice";
import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        flex-direction: row;
    }
`

const CartContainer = styled.div`

    h3 {
        font-size: 24px;
        font-weight: 500;
        line-height: 150%;
        text-transform: uppercase;
        color: var(--text-dark2);
        margin-top: 24px;
    }
    
    p {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);

        span {
            font-weight: 600;
        }
    }
`

const CartList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
`
const CartResume = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 352px;
    padding: 16px 24px;

    background: white;

    h3 {
        font-weight: 600;
        font-size: 20px;
        color: var(--text-dark2);
        text-transform: uppercase;
        margin-bottom: 30px;
    }
`

const TotalItem = styled.div<{ isBold: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    font-weight: ${props => props.isBold ? '600' : '400'};
    font-size: 16px;
    line-height: 150%;

    margin-bottom: 12px;
`

const ShopButton = styled.button`
    color: white;
    border-radius: 4px;
    background: var(--success-color);
    padding: 12px;
    width: 100%;
    border: none;
    margin-top: 40px;
    cursor: pointer;
`

export default function CartPage() {

    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

    const calculateTotal = (value: ProductInCart[]) => {
        return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
    }

    const cartTotal = convertPrice(calculateTotal(value))
    const deliveryFee = 4000;
    const cartTotalWithDelivery = convertPrice(calculateTotal(value) + deliveryFee)


    const handleUpdateQuantity = (id: string, quantity: number) => {
        const newValue = value.map(item => {
            if (item.id !== id) return item
            return { ...item, quantity: quantity }
        })
        updateLocalStorage(newValue)
    }


    const handleDeleteItem = (id: string) => {
        const newValue = value.filter(item => {
            if (item.id !== id) return item
        })
        updateLocalStorage(newValue)
    }


    return (
        <DefaultPageLayout>
            <Container>

                <CartContainer>
                    <BackButton navigate="/" />
                    <h3>Seu Carrinho</h3>
                    <p>
                        Total {value.length} produtos
                        <span>{cartTotal}</span>
                    </p>
                    <CartList>
                        {value.map(item =>
                            <CartItem
                                product={item}
                                key={item.id}
                                handleDelete={handleDeleteItem}
                                handleUpdateQuantity={handleUpdateQuantity}
                            />)}
                    </CartList>
                </CartContainer>

                <CartResume>
                    <h3>Resumo do Pedido</h3>

                    <TotalItem isBold={false}>
                        <p>Subtotal de produtos</p>
                        <p>{cartTotal}</p>
                    </TotalItem>

                    <TotalItem isBold={false}>
                        <p>Entrega</p>
                        <p>{convertPrice(deliveryFee)}</p>
                    </TotalItem>

                    <Divider />

                    <TotalItem isBold>
                        <p>Total</p>
                        <p>{cartTotalWithDelivery}</p>
                    </TotalItem>

                    <ShopButton>FINALIZAR COMPRA</ShopButton>
                </CartResume>

            </Container>
        </DefaultPageLayout>
    )
}