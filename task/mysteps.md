# My steps  🤯
- created project via vue cli. i personally know `vue2`, but for the sake of learning the changes, decided to use vue3
  (`vue create`). chose npm as package manager. chose typescript.
- checked everything into local version control.
- created service that fetches all transactions and all cards.
- create basic card component.
- added vue router. in the meantime, saw that the property and class decorator i used in vue2 are not ready for vue3
  chose as UI framework quasar, since its one of the popular choices and vuetify, which I known doesnt support vue3 yet.
  Adding it via vue-cli was a hassle and made problems so i switched to element plus.
- `npm init vue@3` with typescript support
- for testing i decided to use vitest since jest seems to be semi - supported and also
  not very obvious how to set it up
- Next, I added a github action to automatically deploy the app to github pages
- Next I added the prop passing to the Card component and a click action. The table showing the transaction
  was added in the same commit. Missing now was the selection of transactions via the slider.
- implemented the slider functionality. then chose pinia as a store / persistence, since i used vuex before but that seems to be not the vue3 standard. in the end try to mess a bit with dark mode and vue threejs rendering.
-  i didnt test the components yet (unit, integr), but that would be essential in a real app.  
