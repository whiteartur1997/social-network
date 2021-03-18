import React from "react";
import Preloader from "../common/Preloader/Preloader";

export function WithSuspenseComponent<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: any) => {
        return <React.Suspense fallback={<Preloader />}>
            <WrappedComponent {...props} />
        </React.Suspense>
    }
}