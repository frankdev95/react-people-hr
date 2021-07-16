import styles from "./FilterOptions.module.css";

const FilterOptions = (props) => {
  const { options, selected, onClick, className } = props;

  return (
    <div
      className={`${styles["filter-options"]} ${className ? className : ""}`}
    >
      {options.map((option) => {
        return (
          <div key={option} className={`${styles["filter-option"]}`}>
            <span>{option[0].toUpperCase() + option.slice(1)}</span>
            <input
              type="checkbox"
              defaultChecked={selected.find((filter) => filter === option)}
              onChange={onClick.bind(null, option)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FilterOptions;
