import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { History, ImagesGallery } from "../../../components";
import { setProductsThunk } from "../../../redux/actions";
import ProductCard from "../../Products/ProductCard/ProductCard";
import ProductInfo from "../ProductInfo/ProductInfo";
import "./ProductPage.css";

const ProductPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const products = useSelector((state) => state.products);
    const userCart = useSelector((state) => state.cart);
    const productFound = products.find((product) => product.id === Number(id));

    useEffect(() => {
        if (products.length === 0) dispatch(setProductsThunk());
    }, [dispatch, products.length]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productFound]);

    return (
        <section className="product-detail main-container">
            <History title={productFound?.title} />
            <div className="product-info-flex">
                <div className="col">
                    <ImagesGallery images={productFound?.productImgs} />
                </div>
                <div className="col">
                    <ProductInfo product={productFound} userCart={userCart} />
                </div>
            </div>
            <div className="suggestions">
                <strong>Discover similar items</strong>
                <ul>
                    {products &&
                        products
                            .filter(
                                (product) =>
                                    productFound.category.id ===
                                        product.category.id &&
                                    productFound.id !== product.id
                            )
                            .map((product) => (
                                <li key={product.id}>
                                    <ProductCard
                                        product={product}
                                        userCart={userCart}
                                    />
                                </li>
                            ))}
                </ul>
            </div>
        </section>
    );
};

export default ProductPage;
