import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class Classroom {
    @PrimaryGeneratedColumn("uuid")
    idClassroom: string;              
    @Column()
    idTeacher: string;            
    @Column()
    IdSubject: string;          
    @Column()
    Date: Date;       
    @Column()
    Description: string;
}

export default Classroom;