import { ModelBear } from '../types/bears';
import { instance } from './instance';
import { APIBearsCtx } from '../types/services.bears';
import { PER_PAGE } from '../constants';

const APIBears = {
  fetchBeers({ page, per_page = PER_PAGE, beer_name, abv_gt }: APIBearsCtx): Promise<ModelBear[]> {
    const params: APIBearsCtx = {};
    if (page) params.page = page;
    if (per_page) params.per_page = per_page
    if (beer_name) params.beer_name = beer_name;
    if (abv_gt) params.abv_gt = abv_gt;
    return instance
      .get('/beers', {
        params
      })
      .then(({ data }) => data);
  },
};
export default APIBears;
