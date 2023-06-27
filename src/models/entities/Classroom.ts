import "reflect-metadata";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class Classroom {
    @PrimaryColumn()
    id: string;              
    @Column({nullable: true})
    curso: string;            
    @Column()
    nome: string;          
    @Column()
    data: Date;       
    @Column()
    descricao: string;
    @Column()
    materia: string;
}

export default Classroom;