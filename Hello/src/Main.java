import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //declarando variável
        String nome = "Daniel";
        int idade = 28;
        boolean verade = true;
        double real = 5.20;
        float gravidade = 9.8845F;
        System.out.println("Hello world");

        //o Scanner é usado para inputs do usuário
        Scanner scanner = new Scanner(System.in);

        //imprimindo no console
        System.out.print("Qual o seu nome? ==>");

        String name = scanner.nextLine();

        System.out.print("Qual a sua idade, " + name + "? ==>");

        int age = scanner.nextInt();

        System.out.println("Você tem " + age + " anos, " + name + ".");

        //condicional
        if (age >= 18) System.out.println("Você já é maior");
        if (age < 18) System.out.println("Você é menor");

        //iterando array
        String[] names = {"lucas", "daniel", "samuel", "ju"};

        for(int i = 0; i < names.length; i++) {
            System.out.println(names[i]);
        }

        //estrutura de repetição com while
        int i = 0;
        while (i < 5) {
            System.out.println("Passou no While " + i + " vezes.");
            i++;
        }

        //estrutura de repetição com do while; executa ao menos uma vez.
        int j = 0;
        do {
            System.out.println("Passou no do while " + j + " vezes.");
            j++;
        } while (j < 5);
    }
}
