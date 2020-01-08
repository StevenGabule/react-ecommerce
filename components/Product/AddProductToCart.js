import React from "react";
import {Input} from "semantic-ui-react";
import {useRouter} from "next/router";
import baseUrl from "../../utils/baseUrl";
import cookie from 'js-cookie'
import axios from "axios";
import catchErrors from "../../utils/catchErrors";


function AddProductToCart({user, productId}) {
    const [quantity, setQuantity] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        let timeout;
        if (success) {
            timeout =setTimeout(() => setSuccess(false), 3000)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [success]);

    async function handleAddProductToCart() {
        try {
            setLoading(true);
            const url = `${baseUrl}/api/cart`;
            const payload = {quantity, productId};
            const token = cookie.get('token');
            const headers = {headers: {Authorization: token}};
            await axios.put(url, payload, headers);
            setSuccess(true)
        } catch (error) {
            catchErrors(error, window.alert);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Input
            type="number"
            min="1"
            onChange={event => setQuantity(Number(event.target.value))}
            value={quantity}
            placeholder="Quantity"
            action={
                user && success ? {
                        color: 'blue',
                        content: 'Item Added!',
                        disabled: true,
                        icon: 'plus cart'
                    } :
                    user ? {
                        color: "orange",
                        content: "Add To Cart",
                        icon: "plus cart",
                        loading,
                        disabled: loading,
                        onClick: handleAddProductToCart
                    } : {
                        color: 'blue',
                        content: 'Sign Up To Purchase',
                        icon: 'signup',
                        onClick: () => router.push('/signup')
                    }}
        />
    );
}

export default AddProductToCart;
