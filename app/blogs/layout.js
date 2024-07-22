import "./blog.css";

export default async function RootLayout({ children }) {
  return (
    <>
      <div className="container">{children}</div>
    </>
  );
}
