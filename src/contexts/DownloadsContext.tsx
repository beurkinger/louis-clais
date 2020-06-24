import { createContext } from 'preact';

interface ContextType {
    downloads: Array<{ path: string, title: string }>
    error: string;
    isError: boolean;
    isLoading: boolean;
}

const DownloadsContext = createContext<ContextType>({
    downloads: [],
    error: '',
    isError: false,
    isLoading: true,
});

export default DownloadsContext;
