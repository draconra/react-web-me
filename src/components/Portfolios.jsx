import { MdOutlineMenuBook } from "react-icons/md";

export default function Portfolios() {
  const portfolios = [
    {
      icon: <MdOutlineMenuBook />,
      title: "UI/UX Designing",
      text: "Lorem ipsum dolor sit amet dolor sit amet",
    },
    {
      icon: <MdOutlineMenuBook />,
      title: "UI/UX Designing",
      text: "Lorem ipsum dolor sit amet dolor sit amet",
    },
    {
      icon: <MdOutlineMenuBook />,
      title: "UI/UX Designing",
      text: "Lorem ipsum dolor sit amet dolor sit amet",
    },
    {
      icon: <MdOutlineMenuBook />,
      title: "UI/UX Designing",
      text: "Lorem ipsum dolor sit amet dolor sit amet",
    },
    {
      icon: <MdOutlineMenuBook />,
      title: "UI/UX Designing",
      text: "Lorem ipsum dolor sit amet dolor sit amet",
    },
  ];

  return (
    <div className="mb-12 px-12 py-4">
      <h2 className="text-4xl font-semibold text-center">Portfolios.</h2>
      <h3 className="text-xl font-medium text-center">
        Click on the cards to see my portfolios of related category.
      </h3>

      <div className="grid grid-cols-3 gap-4 mt-12">
        {/* portfolios list */}
        {portfolios.map((portfolios, idx) => {
          return (
            <div className="flex flex-col gap-6 text-xl font-medium border-2 border-[#222222] p-4 rounded-md text-left">
              <span>{portfolios.icon}</span>
              <span className="text-2xl">{portfolios.title}</span>
              <span className="font-light">{portfolios.text}</span>
            </div>
          );
        })}

        <button className="mt-8 bg-[#f9db4b] font-semibold py-2 px-8 rounded-full">
          View All
        </button>
      </div>
    </div>
  );
}
