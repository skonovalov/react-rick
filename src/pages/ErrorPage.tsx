import { Link } from 'react-router-dom';
// import { useRouteError } from 'react-router-dom';

// interface Error {
//   status: number;
//   statusText: string;
// }

function ErrorPage() {
  // const error: Error = useRouteError();

  // console.log(error)

  return (
    <div className="ErrorPage flex flex-col justify-center items-center h-full">
      <h1>Ooops, что-то пошло не так!</h1>
      <p>
        {/* { error.status } */} 404
      </p>
      <p>
        {/* { error.statusText } */} Page Not Found
      </p>
      <p>
        <Link
          to="/"
          className="text-sky-600 hover:text-sky-900"
        >
          На главную
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage;
