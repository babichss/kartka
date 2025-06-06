import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ua: {
    translation: {
      'Keep Contact!': 'Тримай контакт!',
      'My QR': 'Моя Картка',
      'Contacts': 'Картки',
      'Saved Contacts': 'Збережені картки',
      'No saved contacts yet': 'Поки що немає збережених карток',
      'My Profile': 'Мої дані',
      'Edit Profile': 'Редагувати мої дані',
      'Name': "Ім'я",
      'Title': 'Посада',
      'Contacts (up to 3)': 'Контакти (до 3)',
      'Save Profile': 'Зберегти мої дані',
      'Create Profile': 'Заповнити мої дані',
      'Welcome!': 'Вітаємо!',
      "You haven't created your profile yet.": 'Ви ще не заповнили свої дані.',
      'Scan this QR code to add contact': 'Відскануйте цей QR код, щоб додати контакт',
      'Generating QR Code...': 'Генеруємо QR код...',
      'Delete Contact': 'Видалити картку',
      'Are you sure you want to delete this contact?': 'Ви впевнені, що хочете видалити цю картку?',
      'Scan QR code': 'Відскануйте QR код',
      'Scan QR': 'Відсканувати QR',
      'Take photo and save': 'Зробити фото та зберегти',
      'At least one link is required.': 'Необхідно вказати хоча б одне посилання.',
      'Yes': 'Так',
      'Cancel': 'Скасувати',
      'Invalid or corrupted contact QR code.': 'Недійсний або пошкоджений QR-код картки.',
      'Missing contact information in the link.': 'Відсутня інформація про картку у посиланні.',
      'Contact saved. Do you want to create your own profile?': 'Картка збережена. Бажаєте заповнити свої дані?',
      'Go to Profile': 'Заповнити дані',
      'About': 'Про застосунок',
      'This app helps you keep and share contact information easily using QR codes.': 'Цей застосунок допомагає легко зберігати та ділитися контактною інформацією за допомогою QR-кодів.',
      'Developed with ❤️ for quick networking.': 'Розроблено з ❤️ для швидкого нетворкінгу.',
      'Add Contact': 'Додати картку',
      'Contact': 'Картка',
    },
  },
  en: {
    translation: {
      'Keep Contact!': 'Keep Contact!',
      'My Profile': 'My Profile',
      'Contacts': 'Contacts',
      'Saved Contacts': 'Saved Contacts',
      'No saved contacts yet': 'No saved contacts yet',
      'My QR': 'My QR',
      'Edit Profile': 'Edit Profile',
      'Name': 'Name',
      'Title': 'Title',
      'Contacts (up to 3)': 'Contacts (up to 3)',
      'Save Profile': 'Save Profile',
      'Create Profile': 'Create Profile',
      'Welcome!': 'Welcome!',
      "You haven't created your profile yet.": "You haven't created your profile yet.",
      'Scan this QR code to add contact': 'Scan this QR code to add contact',
      'Generating QR Code...': 'Generating QR Code...',
      'Delete Contact': 'Delete Contact',
      'Are you sure you want to delete this contact?': 'Are you sure you want to delete this contact?',
      'Scan QR code': 'Scan QR code',
      'Scan QR': 'Scan QR',
      'Take photo and save': 'Take photo and save',
      'At least one link is required.': 'At least one link is required.',
      'Yes': 'Yes',
      'Cancel': 'Cancel',
      'Invalid or corrupted contact QR code.': 'Invalid or corrupted contact QR code.',
      'Missing contact information in the link.': 'Missing contact information in the link.',
      'Contact saved. Do you want to create your own profile?': 'Contact saved. Do you want to create your own profile?',
      'Go to Profile': 'Go to Profile',
      'About': 'About',
      'This app helps you keep and share contact information easily using QR codes.': 'This app helps you keep and share contact information easily using QR codes.',
      'Developed with ❤️ for quick networking.': 'Developed with ❤️ for quick networking.',
      'Contact': 'Contact',
    },
  },
};

void i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ua',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 