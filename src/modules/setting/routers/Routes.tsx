import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router';

import { SettingsDefaultPage } from '../views/default';
import { SeoGeneralSettingsPage } from '../views/seo/general/SeoGeneralSettingsPage';
import { SeoRepresentationPage } from '../views/seo/representation/SeoRepresentationPage';
import { SeoDisplayPageSettingPage } from '../views/seo/page/SeoDisplayPageSettingPage';
import { SeoArticleSettingsPage } from '../views/seo/article/SeoArticleSettingsPage';
import { SeoArticleCategorySettingPage } from '../views/seo/articleCategory/SeoArticleCategorySettingPage';
import { SeoProductSettingPage } from '../views/seo/product/SeoProductSettingPage';
import { SeoProdCatSetPage } from '../views/seo/productCategory/SeoProdCatSetPage';
import { SeoTrainingSetPage } from '../views/seo/training/SeoTrainingSetPage';
import { SeoTrainCatSetPage } from '../views/seo/trainingCategory/SeoTrainCatSetPage';
import { SeoFeedbackSetPage } from '../views/seo/feedback/SeoFeedbackSetPage';
import { SeoCrawlersSetPage } from '../views/seo/crawlers/SeoCrawlersSetPage';
import { SeoArchivesSetPage } from '../views/seo/archives/SeoArchivesSetPage';

const SettingsRouting = (): ReactElement => {
  return (
    <Routes>
      <Route path="/default" element={<SettingsDefaultPage />} />

      {/* SEO Settings Pages */}
      <Route path="/seo/general" element={<SeoGeneralSettingsPage />} />
      <Route path="/seo/representation" element={<SeoRepresentationPage />} />
      <Route path="/seo/display-pages" element={<SeoDisplayPageSettingPage />} />
      <Route path="/seo/display-articles" element={<SeoArticleSettingsPage />} />
      <Route path="/seo/display-articles-categories" element={<SeoArticleCategorySettingPage />} />
      <Route path="/seo/display-products" element={<SeoProductSettingPage />} />
      <Route path="/seo/display-products-categories" element={<SeoProdCatSetPage />} />
      <Route path="/seo/display-tutorials" element={<SeoTrainingSetPage />} />
      <Route path="/seo/display-tutorials-categories" element={<SeoTrainCatSetPage />} />
      <Route path="/seo/display-feedback" element={<SeoFeedbackSetPage />} />
      <Route path="/seo/crawlers" element={<SeoCrawlersSetPage />} />
      <Route path="/seo/archives" element={<SeoArchivesSetPage />} />
    </Routes>
  );
};

export { SettingsRouting };
