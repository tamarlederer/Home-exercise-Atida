//import java.util.Scanner;
//
//public class Main {
//    public static void main(String[] args) {
//
//
//        Scanner in = new Scanner(System.in);
//        int i, height, width, choice;
//        System.out.println("Press 1 for a rectangle and 2 for a triangle");
//        i = in.nextInt();
//        while (i != 3) {
//            System.out.println("Enter height");
//            height = in.nextInt();
//            System.out.println("Enter width");
//            width = in.nextInt();
//            if (i == 1) {
//                if (height == width || Math.abs(width - height) > 5) {
//                    System.out.println("The area of the rectangle: " + (height * width));
//                } else {
//                    System.out.println("The scope of the rectangle: " + ((height + width) * 2));
//                }
//            } else {
//                System.out.println("Press 1 to calculate the perimeter of the triangle and 2 to print the triangle");
//                choice = in.nextInt();
//                if (choice == 1) {
//                    System.out.println("the triangle's circumference: " + ((height * 2) + width));
//                } else {
//                    if (width % 2 == 0 || width > (height * 2)) {
//                        System.out.println("The triangle cannot be printed");
//                    } else if (width % 2 != 0 && width < (height * 2)) {
//                        for (int j = 1; j <= height; j++) {
//
//                            if (j % 2 != 0) {
//                                for (int k = 0; k < Math.floor(Math.abs((width/2)-j)); k++) {
//                                    System.out.print(" ");
//                                }
//                                for (int k = 1; k <= width; k++) {
//                                    System.out.print("*");
//                                }
//                            } else {
//                                for (int k = 0; k < Math.floor(Math.abs((width/2)-j)); k++) {
//                                    System.out.print(" ");
//                                }
//                                for (int k = 1; k <= width; k++) {
//                                    System.out.print("*");
//                                }
//                            }
//                            System.out.println("");
//                        }
//                    }
//                }
//            }
//
//        }
//
//
//    }
//}


import java.util.Scanner;

public class Main {

    public static void printTriangularRow(int asterisks, int width) {
        int i;

        // רווחים לפני הכוכביות
        for (i = 0; i < (width - asterisks) / 2; i++) {
            System.out.print(" ");
        }

        // הכוכביות
        for (i = 0; i < asterisks; i++) {
            System.out.print("*");
        }

//        // רווחים לאחר הכוכביות
//        for (i = 0; i < (width - asterisks) / 2; i++) {
//            System.out.print(" ");
//        }

        System.out.println();
    }

    public static void trianglePrint(int height, int width) {
        int i, numOfAsterisks = 1;

        // מקרה קצה - הדפסה נפרדת
        if (width <= 3) {
            for (i = 0; i < height - 1; i++) {
                printTriangularRow(numOfAsterisks, width);
            }
            if (width > 1) {
                numOfAsterisks += 2;
            }
        } else {
            int odds = (width - 2) / 2,  // מספר המספרים האי-זוגיים בטווח width - 1 לא כולל
                    all = (height - 2) / odds,  // מספר הפעמים הרצופות שתחזור על עצמה שורה של מספר אי-זוגי של כוכביות
                    more = (height - 2) % odds;  // מספר השורות הנוספות, השארית שתתנקז למספר הכוכביות בשורה האי-זוגי הקטן

            // הדפסת השורה הראשונה + הרווחים
            printTriangularRow(numOfAsterisks, width);

            // הדפסת שאר השורות
            while (true) {
                numOfAsterisks += 2; //  כך יודפס תמיד מספר אי-זוגי של כוכביות בשורה
                if (numOfAsterisks >= width) {
                    break;
                }
                for (i = 0; i < all + more; i++) {
                    printTriangularRow(numOfAsterisks, width);
                }
                more = 0;
            }
        }
        // הדפסת השורה האחרונה
        printTriangularRow(numOfAsterisks, width);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int option, height, width, choice;

        while (true) {
            System.out.println("Press 1 for a rectangle, 2 for a triangle and 3 to exit");
            option = in.nextInt();
            if (option == 3) {
                System.out.println("You go out");
                break;
            }
            System.out.println("Enter height");
            height = in.nextInt();
            System.out.println("Enter width");
            width = in.nextInt();

            if (option == 1) { //מלבן
                if (height == width || Math.abs(width - height) > 5) {
                    System.out.println("The area of the rectangle: " + (height * width));
                } else {
                    System.out.println("The scope of the rectangle: " + ((height + width) * 2));
                }
            } else { //משולש
                System.out.println("Press 1 to calculate the perimeter of the triangle and 2 to print the triangle");
                choice = in.nextInt();
                if (choice == 1) {
                    //נשתמש בחוק שהגובה במשולש שווה שוקיים הוא גם תיכון ובמשפט פיתגורס על מנת למצוא את השוק
                    System.out.println("the triangle's circumference: " + (2 * (Math.sqrt(Math.pow((double) width / 2, 2) + Math.pow(height, 2)))+width));
                } else {
                    if (width % 2 == 0 || width > (height * 2)) {
                        System.out.println("The triangle cannot be printed");
                    }
                    else {
                        trianglePrint(height, width);
                    }
                }

            }
        }
    }


}