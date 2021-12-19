import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default.Layout";
import MovieLayout from "../layouts/Movie.Layout";

const MovieHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <MovieLayout {...props}>
                        <Component {...props} />
                    </MovieLayout>
                )}
            />
        </>
    );
};

export default MovieHOC;