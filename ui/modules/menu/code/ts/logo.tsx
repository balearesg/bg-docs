import * as React from "react";
import {routing} from "@beyond-js/kernel/routing";
import {BeyondImage} from '@bgroup/ui/image';
//import config from "@jadmin/global-trade/config";
import {beyond} from '@beyond-js/kernel/core';
export /*bundle*/
function AppLogo(): JSX.Element {

    const navigate = (event): void => {
        event.stopPropagation();
        routing.pushState('/')
    };
    type params = {
        application?: any;
    };
    //const {application}: params = beyond.params;
    return (
        <div className="logo" onClick={navigate}>
            <BeyondImage src={`${globalThis.baseDir}assets/logo.png`} alt="logo" className="logo-header" onClick={navigate}/>
        </div>
    );

}
