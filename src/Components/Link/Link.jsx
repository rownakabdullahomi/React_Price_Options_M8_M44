const Link = ({route}) => {
  return (
    <li className="mr-10 hover:bg-orange-400 mx-8 px-4 py-1">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
