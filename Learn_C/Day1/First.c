#include <stdio.h>

int main(int argc, char *argv[])
{
  char name[20], alamat[50];

  printf("Hello, World!\n");
  printf("Nama saya %s \n", "Yumana");
  printf("Saya berumur %d \n", 20);
  puts("Saya sedang belajar C");

  printf("Nama Kamu siapa: ");
  scanf("%s", name);

  // Membersihkan buffer stdin
  int c;
  while ((c = getchar()) != '\n' && c != EOF)
    ;

  printf("Hello, %s \n", name);

  printf("Dimana rumahmu: ");
  fgets(alamat, 50, stdin);

  printf("Rumahmu berada di %s \n", alamat);
  return 0;
}
