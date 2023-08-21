# CV-Application Maker created with React 
bugs:

1.Something is wrong with the experience form
2. resume gets cut off on mobile
3. Make sure to cut off resume so it doesn't vertically overflow the div. 
View at this [website](https://cv-application2.vercel.app/)

![image](https://github.com/macaroonforu/CV-Application2/assets/121368271/87ce591b-d82f-434d-8a5c-fd6829fddf25)



Debugging: An issue is that with the experience form, if you click 'edit entry', it will let you edit both entries on the page instead of just displaying a single form like it should. This confuses me because education form is not doing that but the code is identical. 

Somehow, the state of the education form is not being updated properly. When I hit save, the field must still have the value editing=true, which is why forms are being rendered. \

The state is not being updated properly, but I am not sure if it is the state of 'editing' or the state of save/edit of the individual entries. 
