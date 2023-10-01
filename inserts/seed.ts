import { Student } from "../entities/student";
import { AppDataSource } from '../app-data-source';
import { DataSource } from "typeorm";

export class Seed {
    private static _dataSource: DataSource;

    public static getDataSource() {
        if (Seed._dataSource === undefined) {
            Seed._dataSource = AppDataSource;
        }

        return Seed._dataSource;
    }

    public static async AddStudents(): Promise<void> {
        const students = [
            {
                FirstName: 'John',
                SurName: 'Lee',
                DOB: '1996-07-22',
                Gender: 'M',
                AddressLine1: 'Kent Street',
                AddressLine2: 'Cannington',
                Suburb: '31',
                PostCode: '6101',
                State: 'WA',
                Country: 'Australia',
                Email: 'johnlee@gmail.com',
                TelephoneNo: '+61495683402',
            },
            {
                FirstName: 'Honey',
                SurName: 'Person',
                DOB: '1998-09-12',
                Gender: 'F',
                AddressLine1: 'Kintail Rd',
                AddressLine2: 'AppleCross',
                Suburb: '65',
                PostCode: '6153',
                State: 'Western Australia',
                Country: 'Australia',
                Email: 'honey98@gmail.com',
                TelephoneNo: '+61426482933',
            },
            // {
            //     firstName:'',
            //     lastName:'',
            //     surName:'',
            //     DOB:'',
            //     Gender:'',
            //     AddressLine1:'',
            //     AddressLine2:'',
            //     Suburb:'',
            //     PostCode:'',
            //     State:'',
            //     Country:'',
            //     Email:'',
            //     TelephoneNumber:'',
            // }
        ];

        const repo = this.getDataSource().getRepository(Student);


        for (const student of students) {
            const check: Student | null = await repo.findOne({
                where: {
                    FirstName: student.FirstName,
                }
            })

            if (!check) { 
                const newRecord: Student = new Student();
                newRecord.FirstName = student.FirstName;
                newRecord.SurName = student.SurName;
                newRecord.DOB = new Date(student.DOB);
                newRecord.Gender = student.Gender;
                newRecord.AddressLine1 = student.AddressLine1;
                newRecord.AddressLine2 = student.AddressLine2;
                newRecord.Suburb = student.Suburb;
                newRecord.State = student.State;
                newRecord.Country = student.Country;
                newRecord.Email = student.Email;
                newRecord.TelephoneNo = student.TelephoneNo;
                newRecord.PostCode = student.PostCode;
                await repo.save(newRecord);
            }
            
        }
    }
}
