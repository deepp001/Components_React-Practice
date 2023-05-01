import Table from "./Table";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

const SortableTable = (props) => {
  const { config, data } = props;
  const { SortedData, handleClick, sortBy, sortOrder } = useSort(data, config);

  const updatedConfig = config.map((x) => {
    if (!x.sortValue) {
      return x;
    }
    return {
      ...x,
      header: () => (
        <div
          className="flex items-center hover:bg-gray-300  cursor-pointer"
          onClick={() => handleClick(x.label)}
        >
          {getIcon(x.label, sortBy, sortOrder)}
          {x.label}
        </div>
      ),
    };
  });

  return (
    <div>
      <Table {...props} data={SortedData} config={updatedConfig} />
    </div>
  );
};
const getIcon = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowDown />
      </div>
    );
  }
};

export default SortableTable;
