interface LinkProps {
  target: string;
  navigate: (target: string) => void;
  children: string;
}

const Link = ({ target, navigate, children }: LinkProps) => {
  return (
    <a
      href={target}
      onClick={(e) => {
        e.preventDefault();
        navigate(target);
      }}
    >
      {children}
    </a>
  );
};

export default Link;
