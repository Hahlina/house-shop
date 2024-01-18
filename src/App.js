import { RootProvider } from "common/providers";
import { HomeContent } from "modules";

function App() {
    return (
        <RootProvider>
            <HomeContent />
        </RootProvider>
    );
}

export default App;
