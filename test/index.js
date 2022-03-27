import { graphChart } from '../src/index';
import { join } from 'path'

const path = join(__dirname, "./test.csv")
graphChart(path);
