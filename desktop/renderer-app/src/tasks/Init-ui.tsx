import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import { AppRoutes } from "../AppRoutes";
import { StoreProvider } from "../components/StoreProvider";

import "../theme.less";
import "flat-components/build/style.css";

/** configure right after import */
import { configure } from "mobx";
configure({
    isolateGlobalState: true,
});

const initUI = (): void => {
    ReactDOM.render(
        <ConfigProvider
            autoInsertSpaceInButton={false}
            locale={zhCN}
            // let popups scrolls with container parent
            getPopupContainer={trigger => trigger?.parentElement || document.body}
        >
            <StoreProvider>
                <AppRoutes />
            </StoreProvider>
        </ConfigProvider>,
        document.getElementById("root") as HTMLElement,
    );
};

export default initUI;
