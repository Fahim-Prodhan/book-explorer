// import React from 'react';
// import PropTypes from 'prop-types';

// PageToRead.propTypes = {

// };

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { getStoredRead } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";

const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2
        },${y + height / 3} ${x + width / 2}, ${y} 
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height
        } ${x + width}, ${y + height} Z`;
};

const TriangleBar = ({ fill, x, y, width, height }) => {
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

function PageToRead() {
    const allBooks = useLoaderData()
    const localStorageReadList = getStoredRead();
    const data = allBooks.filter(book => localStorageReadList.includes(book.id))
   
    return (
        <div className="flex justify-center md:mt-10">
            <BarChart
                width={1400}
                height={600}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar
                    dataKey="totalPages"
                    fill="#8884d8"
                    shape={<TriangleBar />}
                    label={{ position: "top" }}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
}

export default PageToRead;