import { Router } from "express";

import { GetAllAvailableCountriesController } from "./get-available-countries.controller";
import { GetCountryInfoController } from "./get-country-info.controller";

const CountryRouter = Router({
  mergeParams: true,
});
const getAllAvailableCountriesController =
  new GetAllAvailableCountriesController();

const getCountryInfoController = new GetCountryInfoController();

CountryRouter.get("/:countryCode", (req, res) => {
  getAllAvailableCountriesController.execute(req, res);
});

export default CountryRouter;
