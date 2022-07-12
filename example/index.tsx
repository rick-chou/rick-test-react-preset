import React from 'react';

interface IconProps {
  /**
   * @description 样式
   * @default --
   */
  style?: React.CSSProperties | undefined;
}

export const IconBlog: React.FC<IconProps> = ({ style }) => (
  <svg viewBox="0 0 1024 1024" fill="currentColor" className="h-5" style={style}>
    <path d="M32 96l960 0 0 64-960 0 0-64z"></path>
    <path d="M32 864l960 0 0 64-960 0 0-64z"></path>
    <path d="M128 192l64 0 0 64-64 0 0-64z"></path>
    <path d="M224 192l64 0 0 64-64 0 0-64z"></path>
    <path d="M320 192l64 0 0 64-64 0 0-64z"></path>
    <path d="M384 768l-256 0 0-320 256 0 0 320zM192 704l128 0 0-192-128 0 0 192z"></path>
    <path d="M448 448l224 0 0 64-224 0 0-64z"></path>
    <path d="M1024 352l-1024 0 0-256 1024 0 0 256zM64 288l896 0 0-128-896 0 0 128z"></path>
    <path d="M1024 928l-1024 0 0-479.84 64 0 0 415.84 896 0 0-447.264 64 0z"></path>
    <path d="M448 576l448 0 0 64-448 0 0-64z" p-id="5364"></path>
    <path d="M448 704l448 0 0 64-448 0 0-64z" p-id="5365"></path>
  </svg>
);

export const IconJueJin: React.FC<IconProps> = ({ style }) => (
  <svg viewBox="0 0 1024 1024" fill="currentColor" className="h-5" style={style}>
    <path d="M465.189 161.792c-22.967 18.14-44.325 35.109-47.397 37.742l-5.851 4.68 10.971 8.632c5.998 4.827 11.85 9.508 13.02 10.532 1.17 1.024 17.993 14.336 37.156 29.696l34.962 27.795 5.267-3.95c2.925-2.194 23.259-18.432 45.348-35.986 21.943-17.555 41.253-32.768 42.716-33.646 1.609-1.024 2.779-2.194 2.779-2.78 0-0.438-9.655-8.63-21.504-17.846-11.995-9.363-22.674-17.847-23.845-18.871-15.945-13.02-49.737-39.059-50.76-39.059-0.586 0.147-19.896 14.922-42.862 33.061z m233.325 180.37C507.465 493.275 508.928 492.105 505.417 489.911c-3.072-1.902-11.556-8.485-64.073-50.03-9.07-7.168-18.578-14.775-21.358-16.823-2.78-2.194-8.777-6.875-13.312-10.532-4.68-3.657-10.679-8.339-13.312-10.533-13.165-10.24-71.095-56.027-102.107-80.457-5.852-4.681-11.41-8.485-12.142-8.485-0.731 0-10.971 7.754-22.674 17.116-11.703 9.508-22.674 18.286-24.284 19.456-1.755 1.17-5.12 3.95-7.46 6.144-2.34 2.34-4.828 4.096-5.413 4.096-3.072 0-0.731 3.072 6.437 8.777 4.096 3.218 8.777 6.875 10.094 8.046 1.316 1.024 10.24 8.045 19.748 15.506s23.26 18.286 30.428 23.99c19.31 15.215 31.89 25.308 127.853 101.084 47.836 37.742 88.796 69.779 90.844 71.095 3.657 2.487 3.95 2.487 7.46-0.292a1041.42 1041.42 0 0 0 16.092-12.727c6.875-5.413 14.775-11.703 17.554-13.897 30.135-23.699 80.018-63.05 81.774-64.512 1.17-1.024 12.434-9.802 24.868-19.603s37.888-29.696 56.32-44.324c18.579-14.629 46.227-36.425 61.733-48.567 15.506-12.142 27.794-22.528 27.502-23.26-0.878-1.17-57.637-47.104-59.978-48.274-0.731-0.439-18.578 12.727-39.497 29.257z"></path>
    <path d="M57.93 489.326c-15.215 12.288-28.527 23.405-29.697 24.576-2.34 2.194-5.412-0.44 80.018 66.852 33.207 26.185 32.622 25.747 57.637 45.495 10.386 8.192 36.279 28.672 57.783 45.495 38.18 30.135 44.91 35.401 52.663 41.545 2.048 1.756 22.967 18.14 46.372 36.572 23.26 18.432 74.167 58.514 112.933 89.088 38.912 30.573 71.095 55.734 71.826 56.027 0.732 0.293 7.46-4.389 14.921-10.386 21.797-16.97 90.259-70.949 101.523-79.872 5.705-4.535 12.873-10.24 15.945-12.58 3.072-2.488 6.436-5.12 7.314-5.852 0.878-0.878 11.85-9.509 24.283-19.31 20.773-16.091 59.1-46.226 64.366-50.615 1.17-1.024 5.12-4.096 8.777-6.875 3.657-2.78 7.9-6.29 9.509-7.607 1.609-1.317 14.775-11.703 29.257-23.113 29.11-22.82 42.277-33.207 88.503-69.632 17.262-13.605 32.475-25.454 33.646-26.478 2.486-2.048 31.451-24.869 44.617-35.255 4.827-3.657 9.07-7.168 9.508-7.607 0.44-0.585 5.998-4.827 12.435-9.8 6.436-4.828 13.165-10.24 15.067-11.85l3.365-2.926-9.948-7.753c-5.412-4.388-10.24-8.192-10.679-8.63-1.17-1.317-22.381-18.433-30.135-24.284-3.95-3.072-7.314-5.998-7.606-6.73-1.317-3.071-6.73 0.147-29.258 17.994-13.458 10.532-25.746 20.187-27.355 21.504-1.61 1.463-10.533 8.338-19.749 15.652-9.216 7.168-17.115 13.459-17.554 13.898-0.439 0.438-6.583 5.412-13.897 10.971-7.168 5.559-15.214 11.703-17.7 13.75-4.974 4.097-5.413 4.39-20.334 16.239-5.56 4.388-11.264 8.777-12.435 9.8-1.17 1.025-20.333 16.092-42.422 33.354-22.09 17.408-41.546 32.768-43.155 34.084-1.609 1.463-14.482 11.557-28.525 22.528s-40.814 32.037-59.539 46.812c-18.578 14.775-42.276 33.353-52.516 41.399s-23.26 18.285-28.965 22.82l-10.386 8.339-4.389-3.072c-2.34-1.756-4.68-3.511-5.12-3.95-0.439-0.439-4.973-4.096-10.24-8.046-11.849-9.216-14.482-11.264-16.676-13.166-0.878-0.877-4.243-3.51-7.46-5.851-3.22-2.487-6.145-4.681-6.584-5.12-0.439-0.439-6.875-5.705-14.482-11.703-7.607-5.851-14.921-11.556-16.091-12.58-1.317-1.17-17.116-13.605-35.255-27.795-17.993-14.19-35.109-27.648-38.035-29.842-5.705-4.681-33.499-26.624-125.074-98.743-34.523-27.209-72.704-57.344-84.846-66.852-49.737-39.498-55.15-43.594-56.905-43.447-0.877 0-14.043 10.24-29.257 22.528z"></path>
  </svg>
);

export const IconGithub: React.FC<IconProps> = ({ style }) => (
  <svg viewBox="0 0 1024 1024" fill="currentColor" className="h-5" style={style}>
    <path d="M1023.560892 524.587752c0 114.331752-32.549236 217.148443-97.647709 308.450075-65.047295 91.301632-149.132822 154.455339-252.205404 189.512299-11.975662 2.303012-20.778286 0.716493-26.305515-4.759558a27.584966 27.584966 0 0 1-8.342021-20.471218V853.150798c0-44.166653-11.566238-76.511177-34.647536-96.982394a446.272549 446.272549 0 0 0 68.32269-12.282731c20.16415-5.476051 41.044792-14.329852 62.590748-26.612583a187.311643 187.311643 0 0 0 53.992837-45.446104c14.432209-18.014672 26.203159-41.914819 35.312851-71.751618 9.109692-29.8368 13.664538-64.074912 13.664538-102.765514 0-55.118754-17.554069-102.049021-52.61103-140.739623 16.376974-41.454216 14.636921-87.872703-5.373695-139.357815-12.436265-4.094244-30.399759-1.535341-53.941659 7.523172a355.17563 355.17563 0 0 0-61.311297 30.041513l-25.333132 16.376974a462.137743 462.137743 0 0 0-127.945112-17.707604 462.137743 462.137743 0 0 0-127.945111 17.758782 589.571074 589.571074 0 0 0-28.301459-18.424096c-11.77095-7.31846-30.34858-16.069906-55.681713-26.305515-25.281954-10.235609-44.422543-13.306292-57.31941-9.212048-19.498835 51.433935-21.085354 97.852421-4.606024 139.306637-35.108139 38.690602-52.713386 85.620869-52.713386 140.739623 0 38.690602 4.606024 72.826357 13.715716 102.458445 9.109692 29.58091 20.778286 53.481057 34.954605 71.700441a180.658498 180.658498 0 0 0 53.634591 45.753172c21.545957 12.282731 42.477777 21.18771 62.641926 26.612583 20.215328 5.527229 42.989557 9.621472 68.32269 12.333909-17.758781 16.376974-28.659705 39.867697-32.651593 70.369811a129.941055 129.941055 0 0 1-29.990334 10.235609 184.087426 184.087426 0 0 1-37.974109 3.428929c-14.688099 0-29.171485-4.913092-43.654872-14.688099-14.432209-9.826185-26.766117-24.053681-37.001726-42.682489a109.162769 109.162769 0 0 0-32.293346-35.517563c-13.101579-9.109692-24.104859-14.585743-33.009839-16.376974l-13.306292-2.047122c-9.314404 0-15.762838 1.023561-19.345301 3.070683-3.582463 2.047122-4.606024 4.606024-3.326572 7.83024a37.769397 37.769397 0 0 0 5.987831 9.570295 49.182101 49.182101 0 0 0 8.700267 8.188487l4.606024 3.377751c9.826185 4.606024 19.447657 13.255114 29.017952 25.998447 9.570294 12.743333 16.581686 24.360749 20.982998 34.80107l6.653146 15.71166c5.783119 17.298179 15.558126 31.320963 29.376197 42.017174 13.766894 10.747389 28.659705 17.554069 44.627255 20.471218 15.96755 2.968327 31.423319 4.606024 46.316131 4.810736 14.841633 0.204712 27.22672-0.562958 37.001726-2.405368l15.302235-2.712436c0 17.298179 0.102356 37.564685 0.358247 60.799517l0.307068 36.848192c0 8.188487-2.86597 15.046345-8.700268 20.471218-5.731941 5.527229-14.636921 7.113748-26.612583 4.810736-103.072582-35.056961-187.158109-98.261846-252.205404-189.512299C32.549236 741.736195 0 638.919504 0 524.587752c0-95.191163 22.876586-182.910331 68.629758-263.31104a516.028224 516.028224 0 0 1 186.288082-190.894106A491.309228 491.309228 0 0 1 511.780446 0.012795a491.309228 491.309228 0 0 1 256.913784 70.369811 516.028224 516.028224 0 0 1 186.236905 190.894106C1000.684306 341.626242 1023.560892 429.447767 1023.560892 524.587752z"></path>
  </svg>
);
