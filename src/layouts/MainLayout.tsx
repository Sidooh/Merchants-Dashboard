import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import ErrorFallback from '@/components/error/ErrorFallback';
import PageLoader from '@/components/loaders/PageLoader';
import { Sidebar } from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MainLayout = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            if (hash) {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);

                if (element) {
                    element.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }
            }
        }, 0);
    }, [hash]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <Header />

            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
                <aside>
                    <Sidebar />
                </aside>

                <main className="flex w-full flex-1 flex-col overflow-hidden">
                    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
                        <Suspense fallback={<PageLoader />}>
                            <Outlet />
                        </Suspense>
                    </ErrorBoundary>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default MainLayout;
