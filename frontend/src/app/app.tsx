import Api from "../../libs/api/src/lib/api";
import {environment} from "../environments/environment";
import {ApiProvider} from "../../libs/api/src/lib/providers/api.context";

export function App() {
    return (
        <div>
            <ApiProvider apiUrl={environment.apiUrl}>
                <Api></Api>
            </ApiProvider>
        </div>
    );
}

export default App;
