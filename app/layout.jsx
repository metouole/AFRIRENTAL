import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Ma maison de reve|Trouver une location parfaite',
    description: 'Trouve ta maison de reve avec nous',
    keywords: 'location, maison, vacances, reve',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
             <div>{children}</div>
        </body>
    </html>
  );
};
export default MainLayout 