import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const PriceFilter = ({ handleChangeFilters }) => {
    const handlePriceFilterSubmit = (values) => {
        handleChangeFilters(values);
    };
    const handlePriceFilterValidation = (values) => {
        const { priceFrom, priceTo } = values;
        let errors = {};

        if (priceFrom && priceFrom < 0)
            errors.priceFrom = "Price must be a positive value.";
        if (priceTo && priceTo < 0)
            errors.priceTo = "Price must be a positive value.";
        if (priceFrom && priceTo && priceTo > 0 && priceFrom > priceTo)
            errors.priceTo = "Final price must be greater than inital price.";

        return errors;
    };

    return (
        <Formik
            initialValues={{ priceFrom: "", priceTo: "" }}
            validate={handlePriceFilterValidation}
            onSubmit={handlePriceFilterSubmit}
        >
            {({ values, initialValues, resetForm, errors }) => (
                <Form className="price-filter">
                    <label htmlFor="priceFrom">
                        <span>From</span>
                        <Field type="number" name="priceFrom" min="0" />
                    </label>
                    <ErrorMessage
                        name="priceFrom"
                        component={() => (
                            <small className="input-error-message">
                                {errors.priceFrom}
                            </small>
                        )}
                    />
                    <label htmlFor="priceTo">
                        <span>To</span>
                        <Field type="number" name="priceTo" min="0" />
                    </label>
                    <ErrorMessage
                        name="priceTo"
                        component={() => (
                            <small className="input-error-message">
                                {errors.priceTo}
                            </small>
                        )}
                    />
                    <div className="buttons-section">
                        <button
                            className="clear-price-filter"
                            type="button"
                            onClick={() => {
                                resetForm();
                                handlePriceFilterSubmit(initialValues);
                            }}
                            disabled={!values.priceFrom && !values.priceTo}
                        >
                            Clear
                        </button>
                        <button
                            type="submit"
                            disabled={!values.priceFrom && !values.priceTo}
                        >
                            Filter price
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default PriceFilter;
