import React from "react";

const Index = () => {
  function collapseDataTable(data) {
    const newDataTable = [];
    const groupedData = {};

    data.forEach((row) => {
      const key = `${row["CartKey"]}_${row["Location"]}_${row["Qty"]}`;
      if (!groupedData[key]) {
        groupedData[key] = { ...row, combinedRows: 1 };
      } else {
        if (groupedData[key]["Qty"] === row["Qty"]) {
          groupedData[key].combinedRows += 1;
        } else {
          newDataTable.push(row);
        }
      }
    });

    for (const key in groupedData) {
      if (groupedData[key].combinedRows > 1) {
        newDataTable.push(groupedData[key]);
      }
    }

    newDataTable.sort((a, b) => {
      const cartKeyComparison = a["CartKey"].localeCompare(b["CartKey"]);
      if (cartKeyComparison !== 0) return cartKeyComparison;
      return a["Location"].localeCompare(b["Location"]);
    });

    return newDataTable;
  }

  return <div>{}</div>;
};

export default Index;
