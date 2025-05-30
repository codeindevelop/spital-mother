/* eslint-disable react-hooks/rules-of-hooks */
import { useIntl } from 'react-intl';

export const useTranslate = (key: any) => useIntl().formatMessage({ id: key });
