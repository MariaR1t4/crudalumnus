import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class Classroom {
    @PrimaryGeneratedColumn("uuid")
    IdClassroom: string;              
    @Column()
    IdTeacher: string;            
    @Column()
    IdSubject: string;          
    @Column()
    Date: Date;       
    @Column()
    Description: string;
}

export default Classroom;