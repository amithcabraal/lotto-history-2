import { useState, useEffect } from 'react';
import { DrawResult } from '../types/lottery';
import { parseXmlToJson } from '../utils/xmlParser';
import { xmlData } from '../data/xmlData';

export const useXmlParser = () => {
  const [data, setData] = useState<DrawResult[]>([]);

  useEffect(() => {
    try {
      const parsedData = parseXmlToJson(xmlData);
      setData(parsedData);
    } catch (error) {
      console.error('Error parsing XML:', error);
      setData([]);
    }
  }, []);

  return data;
};