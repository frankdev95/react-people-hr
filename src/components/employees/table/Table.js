import { useCallback } from "react";
import styles from "./Table.module.css";

const Table = (props) => {
  const { data, classes } = props;

  const getFields = useCallback(() => {
    return data[0].entity.map((fieldObj) => (
      <th key={fieldObj.field}>{fieldObj.field}</th>
    ));
  }, [data]);

  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>{getFields()}</tr>
      </thead>
      <tbody className={styles.body}>
        {data.map((record) => {
          return (
            <tr key={record.key} className={styles.row}>
              {record.entity.map((fieldObj, index) => {
                return (
                  <td
                    key={`${record.key}-${Math.random()}`}
                    className={styles[classes[index]]}
                  >
                    {fieldObj.data.map((data) => (
                      <div key={data}>{data}</div>
                    ))}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
