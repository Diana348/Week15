# Week15
/ ------------- Вопрос 1 ----------- /
Цикл состоит из условия и тела.
Тело цикла выполняется пока выполняется условие цикла.

/ ------------- Вопрос 2 ----------- /
Количество уровней вложенностей не ограничено.

/ ------------- Вопрос 3 ----------- /
Если конструкция switch находится внутри функции, выходом из нее может послужить break и return.

/ ------------- Вопрос 4 ----------- /
Части for можно пропускать, например:
1)Если не нужно ничего делать перед началом цикла (уже обьявлена переменная и присвоено ей значение).
let i = 0;
for (; i < 3; i++) { 
  alert( i ); 
};

2)Можно убрать "шаг" (будет аналогичен циклу while).
let i = 0;

for (; i < 3;) {
  alert( i++ );
};

3)Можно убрать все (цикл будет бесконечным).
for(;;) - точка с запятой должны присутствовать, иначе будет синтаксическая ошибка.

/ ------------- Вопрос 5 ----------- /
while(condition) {
    тело цикла
}

Цикл while выполняется, пока условие condition истинно.

Пример:
let i = 0;
while (i<5) {
console.log(i);
i++
}

Пример:
let i = 6
while (i) {
    console.log(i);
    i--;
} // переменная i стала условием цикла; он буде выполнятся пока переменная i не будет равна 0, после чего цикл прекратится.

/ ------------- Вопрос 6 ----------- /
Способы принудительного прерывания цикла:
1)break - прерывает цикл и переходит на строку после тела цикла
2)continue - цикл не прерывается, а переходит к следующей итерации (если условие равно true)

/ ------------- Вопрос 7 ----------- /
for (i=2; i<=10; i++) {
    if (i%2==0) {
        console.log(i);
    }
}

/ ------------- Вопрос 8 ----------- /
Если тело цикла состоит и одной строки, то {} не требуются.

/ ------------- Вопрос 9 ----------- /
for (let i = 0; i < 3; i++) { 
  console.log(i);
} // выведет 0, 1, 2

/ ------------- Вопрос 10 ----------- /
let i = 0;
while (++i < 5) console.log(i); // выведет 1, 2, 3, 4

let i = 0;
while (i++ < 5) console.log(i); // выведет 1, 2, 3, 4, 5