export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t dark:border-gray-800 border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            YoControlo
          </h3>
          <p className="dark:text-gray-400 text-gray-600">
            Controla tu 💶 y que nadie te controle
          </p>
        </div>
        <div className="pt-8 border-t dark:border-gray-800 border-gray-200">
          <p className="dark:text-gray-500 text-gray-500 text-sm">
            © {new Date().getFullYear()} YoControlo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
