import { CONFIG } from '@/config.ts';

const Footer = () => {
    return (
        <footer className="absolute bottom-0 w-full">
            <div className="container flex justify-between text-xs mt-4 mb-3">
                <p className="mb-0 text-600">
                    {CONFIG.app.name} | <a href="/">Sidooh</a> <br className="sm:hidden" /> &copy;{' '}
                    {new Date().getFullYear()}
                </p>
                <p className="mb-0 text-600">v{CONFIG.app.version}</p>
            </div>
        </footer>
    );
};

export default Footer;
