import React from 'react';

const DataList = ({ data, onDelete }) => {
  return (
    <div className="border p-4 rounded-lg" style={{ backgroundColor: "white" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", border: "2px solid black" }}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Age</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}>{item.name}</td>
                <td style={styles.td}>{item.email}</td>
                <td style={styles.td}>{item.age}</td>
                <td style={styles.td}>
                  <button style={styles.button} onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={styles.td}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  th: {
    border: "2px solid black",
    padding: "10px",
    textAlign: "left",
    backgroundColor: "#ddd"
  },
  td: {
    border: "2px solid black",
    padding: "10px"
  },
  button: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer"
   
  }
};

export default DataList;
